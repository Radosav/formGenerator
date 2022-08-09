export type formElement = {
  name: string;
  label: string;
  type: "text" | "number" | "select" | "checkbox";
  options?: Array<string>;
  allowAll?: boolean;
};

export const getJsonFile = async (fileUri: string) => {
  try {
    let response = await fetch(fileUri);
    let responseJson = await response.json();
    try {
      parseJsonFile(responseJson);
      return responseJson;
    } catch {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export const parseJsonFile = (
  jsonFile: any
): jsonFile is Array<formElement> => {
  const typeGuard = (fileElement: any): fileElement is formElement => {
    if (
      (fileElement as formElement).name &&
      (fileElement as formElement).type &&
      (fileElement as formElement).label
    ) {
      if (["select", "checkbox", "radio"].includes(fileElement.type)) {
        if (fileElement.options.length < 1) {
          throw "Missing options on element";
        }
      }

      return true;
    }
    throw "Invalid element";
  };

  try {
    jsonFile.forEach((fileElement: formElement) => {
      return typeGuard(fileElement);
    });
    return true;
  } catch (e) {
    return false;
  }
};
