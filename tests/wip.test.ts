import { ethereum, BigInt } from "@graphprotocol/graph-ts";
// import { SuperBadgeGrt } from "../generated/schema";
import { newMockEvent, assert, test } from "matchstick-as/assembly/index";
import { handleApproval } from "../src/mapping";
import { Approval } from "../generated/Contract/Contract";

export function createNewApprovalEvent(
	owner: i32,
	spender: string,
	value: string
): Approval {
	// takes the Approval class and creates a blueprint
	// creates a newApprovalEvent that is a mockevent()

	let newApprovalEvent = changetype<Approval>(newMockEvent());

	newApprovalEvent.parameters = new Array();

	let ownerParam = new ethereum.EventParam(
		"id",
		ethereum.Value.fromString(owner)
	);
	let spenderParam = new ethereum.EventParam("id", spender);
	let valueParam = new ethereum.EventParam(
		"value",
		ethereum.Value.fromString(value)
	);

	newApprovalEvent.parameters.push(ownerParam);
	newApprovalEvent.parameters.push(spenderParam);
	newApprovalEvent.parameters.push(valueParam);

	return newApprovalEvent;
}

test("Can handle new Approval event", () => {
	let newApprovalEvent = createNewApprovalEvent(
		"0xc944e90c64b2c07662a292be6244bdf05cda44a7",
		"0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
		"555"
	);

	handleApproval(newApprovalEvent);

	assert.fieldEquals("SuperBadgeGrt", "0x1234", "value", "555");
});
