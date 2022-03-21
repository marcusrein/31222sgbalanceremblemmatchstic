import { ethereum } from "@graphprotocol/graph-ts";
// import { SuperBadgeGrt } from "../generated/schema";
import { newMockEvent, assert, test } from "matchstick-as/assembly/index";
import { handleApproval } from "../src/mapping";
import { Approval } from "../generated/Contract/Contract";

export function createNewApprovalEvent(
	owner: i32,
	spender: string,
	value: string
): Approval {
	let newApprovalEvent = changetype<Approval>(newMockEvent());

	newApprovalEvent.parameters = new Array();

	let newOwner = new ethereum.EventParam("id", ethereum.Value.fromI32(owner));
	let newSpender = new ethereum.EventParam(
		"id",
		ethereum.Value.fromString(spender)
	);
	let valueParam = new ethereum.EventParam(
		"value",
		ethereum.Value.fromString(value)
	);

	newApprovalEvent.parameters.push(newOwner);
	newApprovalEvent.parameters.push(valueParam);
	newApprovalEvent.parameters.push(newSpender);

	return newApprovalEvent;
}

test("Can handle new Approval event", () => {
	let newApprovalEvent = createNewApprovalEvent(0x1234, "9999", "8888");

	handleApproval(newApprovalEvent);

	assert.fieldEquals("SuperBadgeGRT", "0x1234", "Value", "9999");
});
