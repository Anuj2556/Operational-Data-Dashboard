# Operational Data Dashboard

A practical React dashboard for consuming operational APIs and demonstrating production-style UI states.

## Project Status

- [x] Requirements captured
- [x] Project-local checklist created
- [x] React application initialized
- [ ] Dashboard implemented
- [ ] QA completed
- [ ] GitHub repository created
- [ ] Application deployed

## Implementation Checklist

### 1. Project Setup

- [x] Initialize the React project
- [x] Configure the development and production build
- [x] Add client-side routing
- [x] Define the source folder structure
- [x] Add responsive layout styling

### 2. API Client and Data

- [x] Create a dedicated API client module
- [x] Add list endpoint behavior
- [x] Add detail endpoint behavior
- [x] Add simulated network latency
- [x] Add configurable simulated failures
- [x] Add representative operational records


### 3. Routed Pages

- [x] Create the routed list page
- [x] Create the routed detail page
- [x] Add navigation from a list row to its detail page
- [x] Add a back-to-list action
- [x] Handle an invalid or missing record

### 4. List Controls

- [x] Add search
- [x] Add status filter
- [x] Add priority filter
- [x] Add sorting
- [x] Add pagination
- [x] Persist all active filters in URL query parameters
- [x] Restore filters after a browser refresh
- [x] Keep pagination consistent when filters change

### 5. Reusable Components

- [ ] Build the reusable table component
- [x] Build the filter bar component
- [ ] Build the status badge component
- [ ] Build the pagination component
- [ ] Build the error panel component
- [ ] Keep component APIs reusable and clearly typed

### 6. UI States

- [x] Loading state
- [x] Successful data state
- [x] Empty results state
- [x] API error state
- [x] Retry action
- [x] Detail loading state
- [x] Detail error state
- [x] Detail success state

### 7. Validation and QA

- [ ] Verify search results
- [ ] Verify status filtering
- [ ] Verify priority filtering
- [ ] Verify sorting in both directions where applicable
- [ ] Verify pagination controls and page boundaries
- [ ] Verify list-to-detail navigation
- [ ] Verify URL query parameters survive refresh
- [ ] Verify retry behavior after a simulated failure
- [ ] Verify empty results messaging
- [ ] Verify invalid detail handling
- [ ] Verify responsive behavior on desktop and mobile
- [x] Run the production build

## Manual Demo Checklist

- [ ] Demonstrate the default successful list view
- [ ] Demonstrate a combined search, status, and priority filter
- [ ] Demonstrate sorting and pagination
- [ ] Demonstrate refreshing while filters are encoded in the URL
- [ ] Demonstrate opening a record detail page
- [ ] Demonstrate the loading state
- [ ] Demonstrate an empty result state
- [ ] Demonstrate an API error and retry
- [ ] Demonstrate an invalid detail record

## Submission Checklist

- [ ] Create GitHub repository
- [ ] Push the completed project
- [ ] Add local setup and run commands to this README
- [ ] Add environment variable instructions if needed
- [ ] Deploy the application
- [ ] Add the deployed URL here: _TBD_
- [ ] Confirm the deployed build matches the local build

## Local Run Steps

Run these commands from the project root:

```bash
cd frontend
npm install
npm run dev
npm run lint
npm run build
```

The development server usually runs at `http://localhost:5173`.
