const core = require("@actions/core");
const github = require("@actions/github");

const setup = async () => {
  const rootEmail = core.getInput("root-email");
  const terraformCloudToken = core.getInput("terraform-cloud-token");

  const { orgs: orgsApi } = github.getOctokit();
  const { id: orgId } = await orgsApi.get();

  console.log("!!!! orgId", orgId);

  // TODO: Terraform Cloud init

  core.setOutput("organization", orgId);
};

(async () => {
  try {
    await setup();
  } catch (error) {
    core.setFailed(error.message);
  }
})();
