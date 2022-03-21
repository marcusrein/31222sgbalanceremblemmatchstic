import { PoolCreated } from "./../generated/ConvergentPoolFactory/ConvergentPoolFactory";
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
import { SuperBadgeGrt, AwesomeBadgeBalancer } from "../generated/schema";

// GRT HANDLERS

export function handleApproval(event: Approval): void {
	let entity = SuperBadgeGrt.load(event.transaction.from.toHexString());

	if (!entity) {
		entity = new SuperBadgeGrt(event.transaction.from.toHexString());
		entity.id = event.params.owner.toHexString();
		entity.value = event.params.value;
		entity.save();
	}
	log.info("GRTTTTT HandleApproval Triggered' fxn: {}", [entity.id]);
}

export function handleMinterAdded(event: MinterAdded): void {
	let entity = SuperBadgeGrt.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGrt(event.transaction.from.toHexString());
		entity.id = event.params.account.toHexString();
		entity.save();
	}
	log.info("GRTTTTT handleMinterAdded Triggered' fxn: {}", [entity.id]);
}

export function handleMinterRemoved(event: MinterRemoved): void {
	let entity = SuperBadgeGrt.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGrt(event.transaction.from.toHexString());
		entity.id = event.params.account.toHexString();
		entity.save();
	}
	log.info("GRTTTTT handleMinterRemoved Triggered' fxn: {}", [entity.id]);
}

export function handleNewOwnership(event: NewOwnership): void {
	let entity = SuperBadgeGrt.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGrt(event.transaction.from.toHexString());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("GRTTTTT handleNewOwnership Triggered' fxn: {}", [entity.id]);
}

export function handleNewPendingOwnership(event: NewPendingOwnership): void {
	let entity = SuperBadgeGrt.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGrt(event.transaction.from.toHexString());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("GRTTTTT NewPendingOwnership Triggered' fxn: {}", [entity.id]);
}

export function handleTransfer(event: Transfer): void {
	let entity = SuperBadgeGrt.load(event.transaction.from.toHexString());
	if (!entity) {
		entity = new SuperBadgeGrt(event.transaction.from.toHexString());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("GRTTTTT handleTransfer Triggered' fxn: {}", [entity.id]);
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
	log.info("BALANCERRRRR handleSwapEvent Triggered' fxn: {}", [entity.id]);
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
	log.info("BALANCERRRRR handleBalanceChange Triggered' fxn: {}", [
		entity.id,
	]);
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
	log.info("BALANCERRRRR handleBalanceManage Triggered' fxn: {}", [
		entity.id,
	]);
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
	log.info("BALANCERRRRR handleInternalBalanceChange Triggered' fxn: {}", [
		entity.id,
	]);
}

// NEW HANDLERS INPUTTED THAT HAVE NOT BEEN TESTED BELOW THIS VVVV

export function handleNewWeightedPool(event: PoolCreated): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.pool.toHexString();
		entity.save();
	}
	log.info("BALANCERRRRR handleNewWeightedPool Triggered' fxn: {}", [
		entity.id,
	]);
}

export function handleNewStablePool(event: PoolCreated): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.pool.toHexString();
		entity.save();
	}
	log.info("BALANCERRRRR handleNewStablePool Triggered' fxn: {}", [
		entity.id,
	]);
}

export function handleNewMetaStablePool(event: PoolCreated): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.pool.toHexString();
		entity.save();
	}
	log.info("BALANCERRRRR handleNewMetaStablePool Triggered' fxn: {}", [
		entity.id,
	]);
}

export function handleNewLiquidityBootstrappingPool(event: PoolCreated): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.pool.toHexString();
		entity.save();
	}
	log.info(
		"BALANCERRRRR handleNewLiquidityBootstrappingPool Triggered' fxn: {}",
		[entity.id]
	);
}

export function handleNewInvestmentPool(event: PoolCreated): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.pool.toHexString();
		entity.save();
	}
	log.info(
		"BALANCERRRRR handleNewLiquidityBootstrappingPool Triggered' fxn: {}",
		[entity.id]
	);
}

export function handleNewCCPPool(event: PoolCreated): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.pool.toHexString();
		entity.save();
	}
	log.info("BALANCERRRRR handleNewCCPPool Triggered' fxn: {}", [entity.id]);
}

export function handleNewStablePhantomPool(event: PoolCreated): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.pool.toHexString();
		entity.save();
	}
	log.info("BALANCERRRRR handleNewCCPPool Triggered' fxn: {}", [entity.id]);
}

export function handleNewLinearPool(event: PoolCreated): void {
	let entity = AwesomeBadgeBalancer.load(
		event.transaction.from.toHexString()
	);
	if (!entity) {
		entity = new AwesomeBadgeBalancer(event.transaction.from.toHexString());
		entity.id = event.params.pool.toHexString();
		entity.save();
	}
	log.info("BALANCERRRRR handleNewLinearPool Triggered' fxn: {}", [
		entity.id,
	]);
}
