import { logError } from "./apiHelper";

function SchoolStaffControllerMixin(BaseClass) {
  return class SchoolStaffController extends BaseClass {
    async getSchoolInformation() {
      try {
        const result = await this.api.get("/SchoolStaffGetSchoolInformation", {});
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getStudentsSchoolStaff() {
      try {
        const result = await this.api.get("/SchoolStaffGetStudents", {
          params: { lastSeenStudentName: "" }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchoolBusesInfo(currentDate) {
      try {
        const result = await this.api.get("/SchoolStaffGetSchoolBusesInfo", {
          params: { date: currentDate }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchoolBusStops(schoolBusId, currentDate, direction) {
      try {
        const result = await this.api.get("/SchoolStaffGetSchoolBusStops", {
          params: { id: schoolBusId, date: currentDate, direct: direction }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getChangeRequests() {
      try {
        const result = await this.api.get("/SchoolStaffGetChangeRequests", {});
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchoolStaffChangeRequestDetail(requestId) {
      try {
        const result = await this.api.get("/SchoolStaffGetChangeRequestDetail", {
          params: { ChangeRequestId: requestId }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async approveChangeRequest(requestId) {
      try {
        const result = await this.api.get("/SchoolStaffApproveChangeRequest", {
          params: { ChangeRequestId: requestId }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }
  };
}
export default SchoolStaffControllerMixin;
