const user = {
  firstName: 'Alex',
  me: this,
  logMe() {
    console.log(this.me.firstName);
  },
};

/* Will raise an error because this.me is undefined;
 * `this` cannot be set as an object property;
 * `this` is available only in object methods.
 */
user.logMe();
