const ProfileMapper = {
  gsi1_pk: 'userId',
  gsi2_pk: 'email',
  gsi3_pk: 'curp'
}

const EmployeeMapper = {
  pk: 'companyId',
  sk: 'profileId',
  gsi1_pk: 'employeeId'
}

module.exports = { ProfileMapper, EmployeeMapper }
