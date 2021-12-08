import auth from "./screens/auth";

const Routes = (props) => {
  const { user, fetchUser } = props;

  return (
    <>
      <Switch>
        <Route path="/auth" component={auth}/>
      </Switch>
    </>
  );
}
