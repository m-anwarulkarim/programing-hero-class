```mermaid
graph TD
    A[messy-files] --> B[getCategory()]

    B --> C[images]
    B --> D[documents]
    B --> E[videos]
    B --> F[audio]
    B --> G[code]
    B --> H[archives]
    B --> I[spreadsheets]
    B --> J[others]

    C --> C1[organized/images/]
    D --> D1[organized/documents/]
    E --> E1[organized/videos/]
    F --> F1[organized/audio/]
    G --> G1[organized/code/]
    H --> H1[organized/archives/]
    I --> I1[organized/spreadsheets/]
    J --> J1[organized/others/]
```
