import { SuperBadgeGRT } from "./../generated/schema";
import { clearStore, test, assert } from "matchstick-as/assembly/index";

test("See if a handler fills up a SuperBadgeGRT", () => {
	let x = BigInt(99999);

	let bob = new SuperBadgeGRT("11111");
	bob.value = x;
	bob.save();

	assert.fieldEquals("SuperBadgeGrt", "11111", "value", null);
});
