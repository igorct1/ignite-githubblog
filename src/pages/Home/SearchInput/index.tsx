import { useForm } from "react-hook-form";
import {
  SearchContainer,
  SearchInputElement,
  SearchPublications,
} from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchProps {
  fetchPosts: (query: string) => Promise<void>;
  postsLength: number;
}

const inputSearchFormSchema = zod.object({
  query: zod.string(),
});

type InputFormProps = zod.infer<typeof inputSearchFormSchema>;

export function SearchInput({ fetchPosts, postsLength }: SearchProps) {
  const { register, handleSubmit } = useForm<InputFormProps>({
    resolver: zodResolver(inputSearchFormSchema),
  });

  async function onSearch(data: InputFormProps) {
    await fetchPosts(data.query);
  }

  return (
    <SearchContainer onSubmit={handleSubmit(onSearch)}>
      <SearchPublications>
        <h2>Publicaçoẽs</h2>
        <span>{`${postsLength} publicações`}</span>
      </SearchPublications>
      <SearchInputElement
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </SearchContainer>
  );
}
