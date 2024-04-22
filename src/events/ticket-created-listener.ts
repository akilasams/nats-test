import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";
import { TicketCreatedEvent } from "./ticket-created-event";
import { Subjects } from "./subjects";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "booking-service-queue-group";

  onMessage(data: TicketCreatedEvent["data"], msg: Message): void {
    console.log("Event Data!!!", data);

    console.log(data.id);
    console.log(data.title);

    msg.ack(); // If business logic processes successfully completed
  }
}
