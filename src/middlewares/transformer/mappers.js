module.exports = {
  ProfileMapper: {
    gsi1_pk: 'userId',
    gsi2_pk: 'email',
    gsi3_pk: 'curp',
    pk: 'pk',
  },
  EmployeeMapper: {
    pk: 'companyId',
    sk: 'profileId',
    gsi1_pk: 'employeeId',
  },
}
