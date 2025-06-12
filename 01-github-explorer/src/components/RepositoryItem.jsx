export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default name'}</strong>
            <p>{props.repository?.description ?? 'Default description'}</p>
            <a href={props.repository?.link ?? 'Default link'}>Acesse o repositorio</a>
        </li>
    )
}