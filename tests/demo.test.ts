import { SuperBadgeGRT } from "./../generated/schema";
import { clearStore, test, assert } from "matchstick-as/assembly/index";
import { bigInt } from "@graphprotocol/graph-ts";

let SUPERBADGE_ENTITY_TYPE = "SuperBadgeGRT";

test("See if a handler fills up a SuperBadgeGRT", () => {
	let bob = new SuperBadgeGRT("11111");
	bob.save();

	assert.fieldEquals(SUPERBADGE_ENTITY_TYPE, "11111", "id", "11111");
});
