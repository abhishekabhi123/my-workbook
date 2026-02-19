const TicketMaster = require("./ticketManager");

const ticket = new TicketMaster(10);

ticket.on("buy", () => {
  console.log("bought a ticket");
});

ticket.buy();
