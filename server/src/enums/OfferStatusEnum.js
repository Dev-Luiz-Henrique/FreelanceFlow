const offerStatusEnum = Object.freeze({
    OPEN: {
        id: 1,
        name: "Aberto",
        value: "open"
    },
    ACCEPTED: {
        id: 2,
        name: "Aceito",
        value: "accepted"
    },
    REJECTED:{
        id: 3,
        name: "Rejeitado",
        value: "rejected"
    }
});

module.exports = offerStatusEnum;