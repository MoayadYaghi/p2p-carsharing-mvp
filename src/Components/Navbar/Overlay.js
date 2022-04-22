import React from "react";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

export default function Home() {
  const HomeLink = "/";
  const { isAuthenticated, logout } = useMoralis();
  const { authenticate, authError } = useMoralis();

  return (
    <div>
      {isAuthenticated ? (
        <p>
          You are logged in
          <br/>
          <br/>
          <button onClick={logout}>Sign Out</button>
        </p>
      ) : (
        <div>
          <div>
            {authError && (
              <p>
                {authError.name}
                {authError.message}
              </p>
            )}
            <button onClick={authenticate}>Login using Metamask</button>
          </div>
        </div>
      )}
      <Link to={HomeLink}>
        <button>Return to Homepage</button>
      </Link>
    </div>
  );
}

// import { useMoralis } from "react-moralis";
// const { authenticate, isAuthenticated, logout } = useMoralis();

// const Connect = () => {
//     return (
//       <Container>
//         <Box>
//           <Account />
//         </Box>
//       </Container>
//     );
//   };

//   export default Connect;

{
  /* <>
<VStack>
  <Box>
    <Box
      className="flex-child"
      style={{ marginTop: "10px", padding: "0 10px" }}
    >
      <Address
        avatar="left"
        size={12}
        copyable
        style={{ fontSize: "20px" }}
      />
      <a
        href={`${getExplorer(chainId)}address/${walletAddress}`}
        target="_blank"
        rel="noreferrer"
      >
        <SelectOutlined
          style={{
            marginRight: "5px",
            top: "-3px",
            position: "relative",
          }}
        />
        View on Explorer
      </a>
    </Box>
    <Box
      className="flex-child"
      style={{ marginTop: "10px", padding: "0 10px" }}
    >
      <Button
        mt={4}
        colorScheme="white"
        isFullWidth={true}
        variant="link"
        isDisabled={false}
        onClick={() => {
          logout();
        }}
      >
        ϟ Disconnect Wallet
      </Button>
    </Box>
  </Box>
</VStack>
</> */
}

// export default function Overlay(props) {
//     let component;
//     if (props.linkData === "connect") {
//         // component = <Connect />;
//     } else {
//         component = <></>;
//     }

//     return (
//         <div className={props.toggleData ? "nav_overlay active" : "nav_overlay"}>
//             <span className={"bars"}></span>
//             <span className={"bars"}></span>
//             <span className={"bars"}></span>
//             <span className={"bars"}></span>
//             <div className="nav_items">
//                 <div
//                     className={
//                         props.toggleData ? "nav_container active" : "nav_container"
//                     }
//                 >
//                     {component}
//                 </div>
//             </div>
//         </div>
//     );
// }
