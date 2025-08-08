export const getVoteText = (votes) => {
  return votes === 1 ? '1 vote' : `${votes} votes`;
};
