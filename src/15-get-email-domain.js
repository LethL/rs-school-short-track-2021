/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const from = email.lastIndexOf('@') + 1;
  const to = email.length;
  const newstr = email.substring(from, to);
  return newstr;
}

module.exports = getEmailDomain;
