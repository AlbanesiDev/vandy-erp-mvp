## Folder and file structure

```
src/
|-- app/
|   |-- core/                       # Project Configuration and Core Services
|   |   |-- authentication/         # Integration of Authentication Module
|   |   |   |-- login.component.*   # Login component
|   |   |   `-- auth.service.*      # Authentication service
|   |   |-- guards/
|   |   |-- services/
|   |   |-- models/
|   |   `-- core.components.ts      # Core components
|   |
|   |-- shared/                     # Shared Modules (directives, pipes, components)
|   |   |-- components/
|   |   |-- directives/
|   |   |-- pipes/
|   |   `-- shared.components.ts    # Shared components
|   |
|   |-- features/                   # ERP-specific Features
|   |   |-- user-management/        # User Roles and Specific Permissions
|   |   |   |-- roles-management/   # Role Management
|   |   |   `-- permissions/        # Definition and assignment of permissions
|   |   |-- security/               # Frontend Security
|   |   |-- master-data/            # CRUD for Master Data
|   |   |   |-- customers/
|   |   |   |-- suppliers/
|   |   |   `-- products/
|   |   |-- state-management/       # State Management
|   |   |-- sales-purchase/         # Basic Purchase and Sales Processes
|   |   |   |-- sales-flow/
|   |   |   `-- purchase-flow/
|   |   |-- inventory-pricing/      # Inventory and Pricing Information
|   |   `-- testing/                # Functionality Testing
|   |
|   |-- app.component.*             # Root component
|   `-- app.routing.ts              # Main application routes
|
|-- assets/                         # Static resources (images, fonts, etc.)
|-- environments/                   # Environment configurations
`-- styles/                         # Global styles
```
