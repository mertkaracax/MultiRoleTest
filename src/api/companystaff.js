import { logError } from "./apiHelper";

function CompanyStaffControllerMixin(BaseClass) {
  return class CompanyStaffController extends BaseClass {
    async getDrivers() {
      try {
        const result = await this.api.get("/CompanyStaffGetDrivers", {
          params: { schoolId: 1 }
        });
        // if (Array.isArray(result?.data?.Data?.Drivers)) return result.data.Data.Drivers;
        // return [];
        return result.data.Data;
      } catch (err) {
        logError(`ERROR----------------------------${err}`);
        return null;
      }
    }

    async getHostesses() {
      try {
        const result = await this.api.get("/CompanyStaffGetHostesses", {
          params: { schoolId: 1 }
        });
        // if (Array.isArray(result?.data?.Data?.Drivers)) return result.data.Data.Drivers;
        // return [];
        return result.data.Data;
      } catch (err) {
        logError(`ERROR----------------------------${err}`);
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

    async getSchools() {
      try {
        const result = await this.api.get("/CompanyStaffGetSchools", {});
        console.log(result.data.Data);
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getBuses() {
      try {
        const result = await this.api.get("/CompanyStaffGetBuses", {
          params: { schoolId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getStudents() {
      try {
        const result = await this.api.get("/CompanyStaffGetStudents", {
          params: { schoolId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getParent() {
      try {
        const result = await this.api.get("/CompanyStaffGetParent", {
          params: { studentId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getRoutes() {
      try {
        const result = await this.api.get("/CompanyStaffGetRoutes", {
          params: { schoolId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getDefaultStops(id, dir) {
      try {
        const result = await this.api.get("/CompanyStaffGetDefaultStops", {
          params: { routeId: id, direction: dir } // Date kısmında hata var. Formatı ögrenicez.
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getRouteStops() {
      try {
        const result = await this.api.get("/CompanyStaffGetRouteStops", {
          params: { routeId: 1, direction: 1, date: new Date() } // Date kısmında hata var. Formatı ögrenicez.
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchoolChangeRequests() {
      try {
        const result = await this.api.get("/CompanyStaffGetSchoolChangeRequests", {
          params: { schoolId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getChangeRequestDetail(requestId) {
      try {
        const result = await this.api.get("/CompanyStaffGetChangeRequestDetail", {
          params: { changeRequestId: requestId }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getChangeRequestRead(requestId) {
      try {
        const result = await this.api.get("/CompanyStaffChangeRequestRead", {
          params: { changeRequestId: requestId }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getChangeRequestRouteId(studentId, direction) {
      try {
        if (direction === 1) {
          const result = await this.api.get("/GetStudentGetOnRoute", {
            params: { studentId: studentId }
          });
          return result.data.Data;
        } else if (direction === 2) {
          const result = await this.api.get("/GetStudentGetOffRoute", {
            params: { studentId: studentId }
          });
          return result.data.Data;
        }
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async replyRequest(requestId, offeredLocation, routeId, isRecejted) {
      let inp = {
        ChangeRequestId: requestId,
        LocationApproved: false,
        // OfferedLocation: { Address: "string", Latitude: lat, Longitude: lon },
        OfferedLocation: offeredLocation,
        OfferedRouteId: routeId,
        LocationRejected: isRecejted
      };
      console.log("requestId => ", requestId);
      console.log("inp => ", inp);
      try {
        const result = await this.api.post("/CompanyStaffReplyBusStopChangeRequest", inp);
        console.log(result);
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }
  };
}

export default CompanyStaffControllerMixin;
