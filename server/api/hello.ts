import prisma from '~/prisma';

export default defineEventHandler(async event => {
  // Retrieve all published posts
  const allPosts = await prisma.post.findMany({
    where: { published: true },
  });

  return allPosts;
});
