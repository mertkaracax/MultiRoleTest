import { logError } from "./apiHelper";

function SecurityControllerMixin(BaseClass) {
  return class SecurityController extends BaseClass {
    async getReciveableStudents() {
      try {
        const result = await this.api.get("/GetReceivableStudents", {
          params: { time: new Date() }
        });
        if (Array.isArray(result?.data?.Data?.Students)) return result.data.Data.Students;
        return [];
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async deliverStudent(studentId, recipientId) {
      try {
        const data = {
          StudentId: studentId,
          RecipientParentId: recipientId,
          OtherRecipient: recipientId === -1,
          Description: "string",
          IsLocalStudentDeliver: true
        };
        const result = await this.api.post("/SchoolSecurityDeliverStudent", data);
        return result;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async searchStudent(name) {
      try {
        const result = await this.api.get("/SchoolSecuritySearchStudent", {
          params: { key: name }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }
  };
}

export default SecurityControllerMixin;
