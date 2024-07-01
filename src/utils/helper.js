export const setTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export const copyToClipboard = (e, text) => {
  e.preventDefault();
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log(`Copied ${text} to clipboard`);
    })
    .catch((error) => {
      console.error("Failed to copy:", error);
    });
};
