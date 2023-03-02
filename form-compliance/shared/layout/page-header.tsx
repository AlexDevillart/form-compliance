import { createStyles, Header, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#FEF106",
    borderBottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}

const PageHeader = () => {
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header} mb={40}>
      <Container>
        <div className={classes.inner}>
          <a href="/">
            <img src="logo-casa-e-video.png" alt="Logo of Casa&Video" />
          </a>
        </div>
      </Container>
    </Header>
  );
};

export default PageHeader;
