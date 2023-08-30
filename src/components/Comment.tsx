import * as React from 'react';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

const Comment = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const [comment, setComment] = React.useState('');
  const [commentList, setCommentList] = React.useState<string[]>([]);

  const addEmoji = (emoji: string) => () => setComment(`${comment}${emoji}`);
  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <Box sx={{ width: 100 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ padding: '12px', width: '350px' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '5px',
                  flexWrap: 'wrap',
                }}
              >
                {commentList.map((com, index) => (
                  <Textarea value={com} sx={{ fontSize: '12px' }} />
                ))}
              </div>
              <br />
              <Textarea
                minRows={2}
                onChange={(event) => setComment(event.target.value)}
                sx={{ minWidth: 300 }}
                value={comment}
                startDecorator={
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji('👍')}
                    >
                      👍
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji('🏖')}
                    >
                      🏖
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji('😍')}
                    >
                      😍
                    </IconButton>
                  </Box>
                }
              />
              <Button
                onClick={() =>
                  setCommentList([...commentList, `You : ${comment}`])
                }
              >
                Submit Comment
              </Button>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Button
          startIcon={<MapsUgcIcon />}
          onClick={handleClick('bottom-start')}
          sx={{ fontSize: '12px' }}
        >
          {`Comment(${commentList.length})`}
        </Button>
      </Grid>
    </Box>
  );
};

export default Comment;
