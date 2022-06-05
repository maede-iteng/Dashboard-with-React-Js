module.exports = async (ctx, next) => {
  // If the user is an administrator we allow them to perform this action unrestricted
  if (ctx.state.user.role.name === "Administrator") {
    return next();
  }

  const { id: currentUserId } = ctx.state.user;
  // If you are using MongoDB do not parse the id to an int!
  const userToUpdate = Number.parseInt(ctx.params.id, 10);

  if (currentUserId !== userToUpdate) {
    return ctx.unauthorized("Unable to edit this user ID");
  }

  // Extract the fields regular users should be able to edit
  const { displayName, newsletter } = ctx.request.body;

  // Provide custom validation policy here
  if (displayName && displayName.trim() === "") {
    return ctx.badRequest("Display name is required");
  }

  // Setup the update object
  const updateData = {
    displayName,
    newsletter
  };

  // remove properties from the update object that are undefined (not submitted by the user in the PUT request)
  Object.keys(updateData).forEach((key) => updateData[key] === undefined && delete updateData[key]);
  if(Object.keys(updateData).length === 0) {
    return ctx.badRequest("No data submitted")
  }

  ctx.request.body = updateData;
  return next();
};
