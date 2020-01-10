export const onLinkKeyPress = (
  event: React.KeyboardEvent<HTMLAnchorElement>
) => {
  if (event.key === ' ') {
    event.preventDefault();
    (event.target as HTMLAnchorElement).click();
  }
};
