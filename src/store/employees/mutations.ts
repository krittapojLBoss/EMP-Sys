export default {
  SetEmps(state: { Emps: any }, Emps: any) {
    state.Emps = Emps;
  },
  LoadingStatus(state: { LoadingStatus: boolean }, NewStatus: boolean) {
    state.LoadingStatus = NewStatus;
  },
};
