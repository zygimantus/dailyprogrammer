class Schedule {

    constructor () {
        this.events = {};
    }

    get (hour) {
        return this.events[hour];
    }

    add (event, hour) {
        this.events[hour] = event;
    }

    delete (hour) {
        this.events[hour] = undefined;
    }

    edit (event, hour) {
        this.events[hour] = event;
    }
}

module.exports = Schedule