var mongoose = require('mongoose');

var MedicationStatementSchema = new mongoose.Schema({
    identifier: [{
    }],
    patient: {
        type: {
            value: String
        },
        reference: {
            value: String
        }
    },
    wasNotGiven: {
        value: Boolean
    },
    reasonNotGiven: [{
        coding: [{
            system: {
                value: String
            },
            code: {
                value: String
            },
            display: {
                value: String
            }
        }]
    }],
    whenGiven: {
    },
    medication: {
        type: {
            value: String
        },
        reference: {
            value: String
        }
    },
    administrationDevice: [{
        type: {
            value: String
        },
        reference: {
            value: String
        }
    }],
    dosage: [{
        timing: {
        },
        site: {
            coding: [{
                system: {
                    value: String
                },
                code: {
                    value: String
                },
                display: {
                    value: String
                }
            }]
        },
        route: {
            coding: [{
                system: {
                    value: String
                },
                code: {
                    value: String
                },
                display: {
                    value: String
                }
            }]
        },
        method: {
            coding: [{
                system: {
                    value: String
                },
                code: {
                    value: String
                },
                display: {
                    value: String
                }
            }]
        },
        quantity: {
            value: {
                value: String
            },
            units: {
                value: String
            },
            system: {
                value: String
            },
            code: {
                value: String
            }
        },
        rate: {
        },
        maxDosePerPeriod: {
        }
    }]
});

mongoose.model('MedicationStatement', MedicationStatementSchema);
