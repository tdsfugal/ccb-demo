import { encryptField } from '../field';

export default function encryptVars(variables, secured) {
  if (Array.isArray(secured) && secured.length > 0)
    try {
      // Encrypt the variables to be secured
      const secureVars = secured.reduce((acc, { name, options }) => {
        acc[name] = encryptField(variables[name], options);
        return acc;
      }, {});
      // Construct a new object without any of the raw secured variables.
      const keys = Object.keys(variables);
      return keys.reduce((acc, key) => {
        acc[key] = secureVars[key] ? secureVars[key] : variables[key];
        return acc;
      }, {});
    } catch (err) {
      /* eslint-disable no-console */
      console.log('CCB encryptVars - failure to encrypt');
      console.log(variables);
      console.log(secured);
    }
  return variables;
}
