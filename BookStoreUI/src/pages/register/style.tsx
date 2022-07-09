import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const createAccountStyle = makeStyles((theme) => ({
  createAccountWrapper: {
    "&.text-danger": {
      fontSize: "14px",
      color: colors.primary,
      position: "absolute",
      top: "70%",
      margin: "0",
    },
    "& .create-account-page-wrapper": {
      padding: "42px 0 80px",
      "@media (max-width: 991px)": {
        padding: "35px 0 50px",
      },
      "@media (max-width: 767px)": {
        padding: "35px 0 40px",
      },
      "& .create-account-row": {
        "& .personal-information": {
          marginBottom: "32px",
        },
        "& p": {
          //color: colors.primary,
          fontWeight: 300,
          fontSize: "15px",
          marginBottom: "16px",
        },
        
        "& .backlink": {
          color: colors.primary,
          fontWeight: "300",
        },

        "& .btn-wrapper": {
          marginBottom: "15px",
          marginTop: "17px",
          "& .btn": {
            minWidth: "136px",
            padding: "0 15px",
          },
        },
        "&.text-danger": {
          fontSize: "14px",
          color: colors.primary,
          position: "absolute",
          top: "70%",
          margin: "0",
        },
        "& .form-row-wrapper": {
          display: "flex",
          flexWrap: "wrap",
          margin: "0 -15px",
          "& .form-col": {
            padding: " 0 15px",
            maxWidth: "50%",
            flex: "0 0 50%",
            "&.text-danger": {
              fontSize: "14px",
              color: colors.primary,
              position: "absolute",
              top: "70%",
              margin: "0",
            },
            "@media(max-width:767px)": {
              maxWidth: "100%",
              flex: "0 0 100%",
            },
            "&.full-width": {
              maxWidth: "100%",
              flex: "0 0 100%",
            },
            
          },
          "& .MuiInputBase-formControl": {
            marginBottom: "15px",
          },
        },
      
      },
    },
  },
}));

export { createAccountStyle };
