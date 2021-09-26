class BaseDocument {
  constructor(pk, sk, gsi1_pk, gsi2_pk, gsi3_pk) {
    this.pk = pk
    this.sk = sk
    this.gsi1_pk = gsi1_pk
    this.gsi2_pk = gsi2_pk
    this.gsi3_pk = gsi3_pk
    this.createdAt = new Date().toISOString()
    this.updatedAt = null
    this.deletedAt = null
  }
}

module.exports = BaseDocument
