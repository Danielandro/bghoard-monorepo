import React from 'react';

import {
  Tile,
  TileGrid,
  TileLeftCorner,
  TileRightCorner,
  TileTitle,
  Image,
  ImageWrapper
} from "@bghoard/review/ui-tile";
import { currencyFormat, ratingFormat } from "@bghoard/shared/util-formatters";
import { useGames } from "@bghoard/review/data-access-games";


/* eslint-disable-next-line */
export interface ReviewFeatureListProps { }


export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  const games = useGames();
  return (
    <TileGrid>
      {games.map(game => {
        return (
          <a
            href={'/' + game.id}
            key={game.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Tile>
              {game.image && (
                <ImageWrapper>
                  <Image src={game.image} />
                </ImageWrapper>
              )}
              <TileTitle>{game.name}</TileTitle>
              <TileLeftCorner>
                {ratingFormat(game.rating)}
              </TileLeftCorner>
              <TileRightCorner>
                {currencyFormat(game.price)}
              </TileRightCorner>
            </Tile>
          </a>
        );
      })}
    </TileGrid>
  );
};

export default ReviewFeatureList;