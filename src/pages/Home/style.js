import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1927",
    alignItems: "center",
  },

  textHeader: {
    color: "#8B98AF",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: "15%",
  },

  body: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  logo: {
    width: "75%",
    height: "25%",
    alignItems: "center",
  },
  input: {
    color: "#fff",
    borderColor: "#8B98AF",
    marginTop: "10%",
    borderBottomWidth: 2,
    width: "53%",
    height: "7%",
  },

  buttonText: {
    color: "#8B98AF",
    textTransform: "capitalize",
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#004F88",
    marginTop: "5%",
    width: "50%",
    height: "5%",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
