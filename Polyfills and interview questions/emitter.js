class EventEmitter {
  constructor() {
    this._subscriptions = new Map();
  }

  subscibe(event, callback) {
    if (!this._subscriptions.has(event)) {
      this._subscriptions.set(event, new Map());
    }

    const subId = Symbol();
    const eventSubs = this._subscriptions.get(event);
    eventSubs.set(subId, callback);
    return {
      release: function () {
        if (!eventSubs.has(subId)) {
          throw new Error("No such event");
        }
        eventSubs.delete(subId);
      },
    };
  }

  emit(event, ...args) {
    const eventSubs = this._subscriptions.get(event);

    if (!eventSubs) return;

    eventSubs.forEach((value) => value(...args));
  }
}

let channel = "";

const emitter = new EventEmitter();

console.log({ channel });

const sub1 = emitter.subscibe("on", (link) => {
  channel = link;
  console.log({ newChannel: channel });
});

emitter.emit("on", "abhi.com/event");
sub1.release();
