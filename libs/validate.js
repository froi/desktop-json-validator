const Ajv = require('ajv');
const draft4 = require('ajv/')
const schema = require('./schemas/schema.json');

function validateJson(jsonData) {
  const ajv = new Ajv({
    schemaId: 'id',
    allErrors: true
  });

  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

  const validator = ajv.compile(schema);

  const isValid = validator(jsonData);

  return {
    isValid,
    errors: validator.errors
  }
}

module.exports = validateJson;