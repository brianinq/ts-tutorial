function Component(constructor: Function) {
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDom = () => {};
}

@Component
class ProfileComponent {}
