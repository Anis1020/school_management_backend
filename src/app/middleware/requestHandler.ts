import catchAsync from "../utils/catchAsync";

const requestHandler = (schema: any) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
      body: req.body,
    });
    next();
  });
};
