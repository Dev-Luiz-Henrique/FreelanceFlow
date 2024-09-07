const projectStatusEnum = Object.freeze({
    OPEN: {
        id: 1,
        name: "Aberto",
        value: "open"
    },
    IN_PROGRESS: {
        id: 2,
        name: "Em andamento",
        value: "in-progress"
    },
    ON_HOLD: {
        id: 3,
        name: "Em espera",
        value: "on-hold"
    },
    COMPLETE: {
        id: 4,
        name: "Completo",
        value: "complete"
    },
    CANCELLED: {
        id: 5,
        name: "Cancelado",
        value: "cancelled"
    }
});

module.exports = projectStatusEnum;