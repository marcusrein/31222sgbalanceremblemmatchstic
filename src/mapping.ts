import {
	InternalBalanceChanged,
	PoolBalanceChanged,
	PoolBalanceManaged,
	Swap,
} from "./../generated/Vault/Vault";
import { BigInt, log } from "@graphprotocol/graph-ts";
import {
	Contract,
	Approval,
	MinterAdded,
	MinterRemoved,
	NewOwnership,
	NewPendingOwnership,
	Transfer,
} from "../generated/Contract/Contract";
import { SuperBadgeGRT, AwesomeBadgeBalancer } from "../generated/schema";

// GRT HANDLERS

export function handleApproval(event: Approval): void {
	let entity = SuperBadgeGRT.load(event.transaction.from.toHexString());

	if (!entity) {
		entity = new SuperBadgeGRT(event.transaction.from.toHexString());
		entity.id = event.params.owner.toHexString();
		entity.value = event.params.value;
		entity.save();
	}
	log.info("GRT HandleApproval Triggered' fxn: {}", [entity.id]);
}

export function handleMinterAdded(event: MinterAdded): void {
	let entity = SuperBadgeGRT.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGRT(event.transaction.from.toHexString());
		entity.id = event.params.account.toHexString();
		entity.save();
	}
	log.info("GRT handleMinterAdded Triggered' fxn: {}", [entity.id]);
}
export function handleMinterRemoved(event: MinterRemoved): void {
	let entity = SuperBadgeGRT.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGRT(event.transaction.from.toHexString());
		entity.id = event.params.account.toHexString();
		entity.save();
	}
	log.info("GRT handleMinterRemoved Triggered' fxn: {}", [entity.id]);
}

export function handleNewOwnership(event: NewOwnership): void {
	let entity = SuperBadgeGRT.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGRT(event.transaction.from.toHexString());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("GRT handleNewOwnership Triggered' fxn: {}", [entity.id]);
}

export function handleNewPendingOwnership(event: NewPendingOwnership): void {
	let entity = SuperBadgeGRT.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGRT(event.transaction.from.toHexString());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("GRT NewPendingOwnership Triggered' fxn: {}", [entity.id]);
}

export function handleTransfer(event: Transfer): void {
	let entity = SuperBadgeGRT.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGRT(event.transaction.from.toHexString());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("GRT handleTransfer Triggered' fxn: {}", [entity.id]);
}

// BALANCER SUBGRAPH HANDLERS

export function handleSwapEvent(event: Swap): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.poolId.toHexString();
		entity.save();
	}
	log.info("BALANCER handleSwapEvent Triggered' fxn: {}", [entity.id]);
}

export function handleBalanceChange(event: PoolBalanceChanged): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.poolId.toHexString();
		entity.save();
	}
	log.info("BALANCER handleBalanceChange Triggered' fxn: {}", [entity.id]);
}

export function handleBalanceManage(event: PoolBalanceManaged): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.poolId.toHexString();
		entity.save();
	}
	log.info("BALANCER handleBalanceManage Triggered' fxn: {}", [entity.id]);
}

export function handleInternalBalanceChange(
	event: InternalBalanceChanged
): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.user.toHexString();
		entity.save();
	}
	log.info("BALANCER handleInternalBalanceChange Triggered' fxn: {}", [
		entity.id,
	]);
}
