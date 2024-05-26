// styles/globalStyles.js

import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingBottom: 200,
  },
  title: {
    marginTop: 48,
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    marginVertical: 10,
    // color: "#4e18a6",
    color: '#6a3de8',
  },
  label: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#555",
    // marginBottom: 5,
  },
  disabledLabel: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "darkgray",
    // color: "#555",
    // marginBottom: 5,
  },
  inputContainerCustomTextInput: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    // marginVertical: 5,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  inputCustomTextInput: {
    height: 40,
    flex: 1,
    marginLeft: 10,
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 15,
    paddingVertical: 10,
    borderRadius: 8,
    // marginVertical: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  inputContainerOld: {
    backgroundColor: "#fff",
    // width: "90%",
    padding: 15,
    borderRadius: 8,
    // marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#007BFF",
    marginTop: 30,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  searchButton: {
    // width: "90%",
    // backgroundColor: "#4e18a6",
    backgroundColor: '#001523',
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  searchButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    marginTop: 20,
  },
  regularText: {
    fontSize: 18,
    color: "#555",
    fontFamily: "Poppins-Regular",
  },
  containerEmpty: {
    display: "flex",
    minHeight: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputContainerAutocompleteLocationInput: {
    flexDirection: "row",
    backgroundColor: "#ffffff", // card-based design
    borderRadius: 10, // larger border radius
    marginVertical: 5,
    paddingHorizontal: 5, // larger horizontal padding
    paddingVertical: 10, // vertical padding
    alignItems: "center",
    shadowColor: "#000", // drop shadow for card-based design
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: "#003d30",
    borderColor: "#aaa",
  },
});

export default globalStyles;
