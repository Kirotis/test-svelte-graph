const API = "http://localhost:4000/";

export const getAllNote = () => {
    const query = `
        query {
            getAllNote {
                id, title, description, isCheck
            }
        }
    `;
    return fetchQuery("getAllNote", query);
};

export const getNoteById = (id) => {
    const query = `
        query {
            getNote(id: ${id}) {
                id, title, description, isCheck
            }
        }
    `;
    return fetchQuery("getNote", query);
};

const fetchQuery = (queryName, query, variables) =>
    fetch(`${API}graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })
        .then((r) => r.json())
        .then(({ data }) => data[queryName]);
