const run = require("./steps/index");

module.exports = [
	run.changeDirectory,
	run.stashChanges,
	run.fetchUpstream,
	run.createOrCheckoutBranch,
	run.gitMergeUpstreamBranch,
	run.gitMergeUpstreamMasterNoFF,
	run.gitPushUpstreamFeatureBranch,
	run.diffWithUpstreamMaster
];
