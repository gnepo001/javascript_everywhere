export default {
  notes: async (parent, args, { models }) => {
    return await models.Note.Find();
  },
  note: async (parent, args, { models }) => {
    return await models.Note.findById(args.id);
  },
};
