import { ethereum } from "@graphprotocol/graph-ts";
// import { SuperBadgeGrt } from "../generated/schema";
import { newMockEvent, assert, test } from "matchstick-as/assembly/index";
import { handleApproval } from "../src/mapping";
import { Approval } from "../generated/Contract/Contract";

export function createNewApprovalEvent(id: i32, value: string): Approval {
	let newApprovalEvent = newMockEvent();
	newApprovalEvent.parameters = new Array();
	let idParam = new ethereum.EventParam("id", ethereum.Value.fromI32(id));
	let valueParam = new ethereum.EventParam(
		"value",
		ethereum.Value.fromString(value)
	);

	newApprovalEvent.parameters.push(idParam);
	newApprovalEvent.parameters.push(valueParam);

	return newApprovalEvent;
}

test("Can handle new Approval event", () => {
	let newApprovalEvent = createNewApprovalEvent(0x1234, "9999");

	handleApproval(newApprovalEvent);

	assert.fieldEquals("SuperBadgeGRT", "0x1234", "Value", "9999");
});
