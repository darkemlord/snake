window.onload = () => {
  const canvas = document.getElementById("game-container") as HTMLCanvasElement;

  if (canvas) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
      canvas.width = 500;
      canvas.height = 500;
      canvas.style.backgroundColor = "white";

      const divSize = 50;
      const numCols = canvas.width / divSize;
      const numRows = canvas.height / divSize;

      const divs: HTMLDivElement[][] = [];

      for (let i = 0; i < numCols; i++) {
        divs[i] = [];

        for (let j = 0; j < numRows; j++) {
          const div = document.createElement("div");
          div.style.width = `${divSize}px`;
          div.style.height = `${divSize}px`;
          div.style.backgroundColor = "black";
          divs[i][j] = div;
        }
      }

      for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
          const img = new Image();
          img.src = `data:image/svg+xml,${encodeURIComponent(
            divs[i][j].outerHTML
          )}`;

          img.onload = () => {
            ctx.drawImage(img, i * divSize, j * divSize, divSize, divSize);
          };
        }
      }
    }
  }
};
