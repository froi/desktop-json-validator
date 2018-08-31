const Ajv = require('ajv');
const defaultSchema = require('./schemas/schema.json');

function validateJson(jsonData, jsonSchema=null) {
  const ajv = new Ajv({
    schemaId: 'id',
    allErrors: true
  });

  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

  const validator = ajv.compile(jsonSchema || defaultSchema);

  const isValid = validator(jsonData);

  return {
    isValid,
    errors: validator.errors
  }
}

module.exports = validateJson;