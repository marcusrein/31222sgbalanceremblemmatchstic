import { SuperBadgeGrt, AwesomeBadgeBalancer } from "./../generated/schema";
import { clearStore, test, assert } from "matchstick-as/assembly/index";

import { BigInt } from "@graphprotocol/graph-ts";

let SUPERBADGEGRT_ENTITY_TYPE = "SuperBadgeGrt";
let AWESOMEBADGEBALANCER_ENTITY_TYPE = "AwesomeBadgeBalancer";

// Example of Generic Handler to be tested:

// export function handleMinterAdded(event: MinterAdded): void {
// 	let entity = SuperBadgeGRT.load(event.transaction.from.toHexString());
// 	if (!entity) {
// 		entity = new SuperBadgeGRT(event.transaction.from.toHexString());
// 		entity.id = event.params.account.toHexString();
// 		entity.save();
// 	}
// 	log.info("GRT handleMinterAdded Triggered' fxn: {}", [entity.id]);
// }

// No need to create an entity off of triggered event. This event occurs, we know this.
// No need to have null logic. Lets just look as straight logic.

test("See if Generic Handler creates an AwesomeBadgeBalancer", () => {
	let entity = new AwesomeBadgeBalancer("123");
	entity.value = BigInt.fromI32(123);

	// detailed handlder

	entity.save();

	assert.fieldEquals(AWESOMEBADGEBALANCER_ENTITY_TYPE, "123", "id", "123");
	// assert.fieldEquals(AWESOMEBADGEBALANCER_ENTITY_TYPE, "123", "value", "456");

	clearStore();
});

test("See if Generic Handler creates an SuperBadgeGRT'", () => {
	let entity = new SuperBadgeGrt("123");
	entity.save();

	assert.fieldEquals(SUPERBADGEGRT_ENTITY_TYPE, "123", "id", "123");
	// assert.fieldEquals(SUPERBADGEGRT_ENTITY_TYPE, "123", "value", "456");

	clearStore();
});
