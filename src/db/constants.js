const FIRST_INDEX = 'FIRST_INDEX'
const SECOND_INDEX = 'SECOND_INDEX'
const THIRD_INDEX = 'THIRD_INDEX'

module.exports = {
    HASH_KEYS: {
        PROFILES: 'profile',
        COMPANIES: 'company',
        EMPLOYEES: 'employee'
    },
    TABLE_NAME: 'Profiles',
    INDICES_NAMES: [FIRST_INDEX, SECOND_INDEX, THIRD_INDEX],
    INDICES_NAMES_MATCHER: {
        gsi1_pk: FIRST_INDEX,
        gsi2_pk: SECOND_INDEX,
        gsi3_pk: THIRD_INDEX
    }
}
